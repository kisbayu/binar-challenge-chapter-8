import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Card, Button, Tooltip, OverlayTrigger } from "react-bootstrap";

import { FaEdit, FaTrash } from "react-icons/fa";
import EditContent from "./edit-content/EditContent";
import DeleteContent from "./delete-content/DeleteContent";

function TableContent({ products, handleShow, setProducts }) {
  const [currentId, setCurrentId] = useState("");
  const [username, setUsername] = useState("");
  const [experience, setExperience] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };
  const handleShowEditModal = (id, name, price) => {
    setCurrentId(id);
    setUsername(username);
    setExperience(experience);
    setShowEditModal(true);
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const handleShowDeleteModal = (id) => {
    setCurrentId(id);
    setShowDeleteModal(true);
  };

  const editProduct = () => {
    const productList = [...products];
    const index = productList.findIndex((item) => item.id === currentId);
    productList[index].username = username;
    productList[index].experience = experience;
    setProducts(productList);
    setShowEditModal(false);
  };

  const deleteProduct = () => {
    const productDelete = products.filter((item) => item.id !== currentId);
    setProducts(productDelete);
    setShowDeleteModal(false);
  };
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
    },
    {
      dataField: "username",
      text: "User",
    },
    {
      dataField: "experience",
      text: "Experience"
    },
    {
        dataField:"level",
        text:"Level"
    },
    {
      dataField: "",
      text: "Actions",
      formatter: (cell, row) => {
        return (
          <div>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Edit Product</Tooltip>}
            >
              <Button
                variant="none"
                onClick={() => {
                  handleShowEditModal(row.id, row.username, row.experience);
                }}
              >
                <FaEdit color="orange" />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Delete Product</Tooltip>}
            >
              <Button
                variant="none"
                onClick={() => {
                  handleShowDeleteModal(row.id);
                }}
              >
                <FaTrash color="red" />
              </Button>
            </OverlayTrigger>
          </div>
        );
      },
    },
  ];

  return (
    <div className="mt-3">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          Product List
          <Button variant="primary" onClick={handleShow}>
            Add Product
          </Button>
        </Card.Header>
        <Card.Body>
          <BootstrapTable
            keyField="id"
            data={products}
            columns={columns}
            pagination={paginationFactory()}
          />
        </Card.Body>
      </Card>
      <EditContent
        show={showEditModal}
        handleClose={handleCloseEditModal}
        username={username}
        experience={experience}
        setUsername={setUsername}
        setExperience={setExperience}
        editProduct={editProduct}
      />

      <DeleteContent
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        deleteProduct={deleteProduct}
      />
    </div>
  );
}

export default TableContent;