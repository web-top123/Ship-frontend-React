import React, { useEffect, useState, useMemo } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import {
  Card,
  CardBody,
  Col,
  Container,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Input,
  Label,
} from "reactstrap";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import classnames from "classnames";
import Dropzone from "react-dropzone";
import MetaTags from 'react-meta-tags';

// Import React FilePond
import { registerPlugin } from "react-filepond";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { addNewQuestion, getQuestion, updateOneQuestion, getCampusCategories } from "../../../helpers/fakebackend_helper";

import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const GroupOptions2 = [
  { value: 'Zero', label: 'Zero' },
  { value: 'Two', label: 'Two' },
  { value: 'Four', label: 'Four' },
  { value: 'One', label: 'One' },
  { value: 'Five', label: 'Five' },
  { value: 'Three', label: 'Three' },
  { value: 'Six', label: 'Six' },
];

const AddQuestion = (props) => {
  let { id } = useParams();
  const [selectedFiles, setselectedFiles] = useState([]);
  const [cateList, setCateList] = useState([]);
  const [questionCate, setQuestionCate] = useState([]);

  const [selectedGroup2, setSelectedGroup2] = useState(null);
  const [defaultCounter, setdefaultCounter] = useState(1);

  function handleSelectGroups2(selectedGroup2) {
    setSelectedGroup2(selectedGroup2);
}
function countUP(id, prev_data_attr) {
  id(prev_data_attr + 1);


}

function countDown(id, prev_data_attr) {
  id(prev_data_attr - 1);
}

  const [Question, setQuestion] = useState({
    description: '',
    campusCategoryId: '',
  });

  var cateTree = [];
  useEffect(() => {
    getCampusCategories().then(res => {
      setQuestionCate(res);
      if (id) {
        getQuestion(id).then(res => {
          setQuestion(res);
        })
      }
    })
  }, []);

  useEffect(() => {
    cateTree = [];
    refreshTree(cateTree, 0);
    setCateList(cateTree);
  }, [Question, questionCate]);

  const refreshTree = (obj, pid) => {
    questionCate.filter(e => e.parentId === pid).map(e => {
      var ch = {};
      ch = { label: e.title, value: e.id, expanded: true, checked: Question.campusCategoryId === e.id, children: [] };
      obj.push(ch);
      refreshTree(ch.children, e.id);
    })
  }

  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const onChange = (currentNode, selectedNodes) => {
    console.log('onChange::', currentNode, selectedNodes.title)
    if (selectedNodes.length) {
      setQuestion({ ...Question, ...{ campusCategoryId: selectedNodes[0]['value'] } })
    }
  }
  const onAction = (node, action) => {
    console.log('onAction::', action, node)
  }
  const onNodeToggle = currentNode => {
    console.log('onNodeToggle::', currentNode)
  }

  document.title = id ? "Edit Question" : "Add Question";
  return (
    <div className="page-content">
      <Container fluid>

        <BreadCrumb title={id ? "Edit Question" : "Add Question"} pageTitle="Admin Question" />

        <Row>
          <Col lg={8}>
            <form>
              <Card>
                <CardBody>
                  <Row>
                <Col lg={3} md={4}>
                <div className="mb-3">
                 <Label htmlFor="choices-single-no-search" className="form-label text-muted">Select position</Label>
                 <Select isClearable={true}
                    value={selectedGroup2}
                    onChange={() => {
                         handleSelectGroups2();
                    }}
                     options={GroupOptions2}    />
                 </div>   
                 </Col>
                 <Col sm={6}>
                        <div>
                          <h5 className="fs-13 fw-medium text-muted">
                            Degree
                          </h5>
                          <div className="input-step">
                            <button
                              type="button"
                              className="minus"
                              onClick={() => {
                                countDown(setdefaultCounter, defaultCounter);
                              }}
                            >
                              –
                            </button>
                            <Input
                              type="number"
                              className="product-quantity"
                              value={defaultCounter}
                              min="1"
                              max="5"
                              readOnly
                            />
                            <button
                              type="button"
                              className="plus"
                              onClick={() => {
                                countUP(setdefaultCounter, defaultCounter);
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </Col>    
                 </Row>           
                  <div className="mb-3">
                    <label
                      className="form-label"
                      htmlFor="manufacturer-brand-input"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="manufacturer-brand-input"
                      placeholder="Enter description"
                      value={Question.description}
                      onChange={e => {
                        setQuestion({ ...Question, ...{ description: e.target.value } })
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      className="form-label"
                      htmlFor="manufacturer-brand-input"
                    >
                      CampusCategory
                    </label>
                    <DropdownTreeSelect data={cateList} onChange={onChange} onAction={onAction} onNodeToggle={onNodeToggle} mode="radioSelect" />
                  </div>

                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button type="submit" className="btn btn-success w-sm" onClick={e => {
                  e.preventDefault();
                  if (id) {
                    updateOneQuestion(id, Question).then(res => {
                      console.log(res);
                    })
                  } else {
                    addNewQuestion(Question).then(res => {
                      console.log(res);
                    })
                  }
                }}>
                  {id ? "Update Question" : "Add Question"}
                </button>
              </div>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AddQuestion;
