import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import AddContent from "./add-content/AddContent";
import FilterContent from "./filter-content/FilterContent";
import TableContent from "./table-content/TableContent";

function Content() {
  const [user, setUser] = useState(
    new Array(1).fill(null).map((data, index) => {
      const key = index + 1;
      return {
        id: key,
        username: `user_${key}`,
        experience: 0,
        level:0
      };
    })
  );

  const [showAddModal, setShowAddModal] = useState(false);
  const handleCloseAddModal = () => setShowAddModal(false);
  const handleShowAddModal = () => setShowAddModal(true);

  const [filter, setFilter] = useState({
    username: "",
    experience: "",
  });

  const [filteredUser, setFilteredUser] = useState([]);

  const filteredSearch = () => {
    if (filter.username && filter.experience) {
      setFilteredUser(
        user.filter(
          (item) => item.username == filter.username && item.experience == filter.experience
        )
      );
    } else if (filter.username) {
      setFilteredUser(user.filter((item) => item.username == filter.username));
    } else if (filter.experience) {
      setFilteredUser(
        user.filter((item) => item.experience == filter.experience)
      );
    } else {
      setFilteredUser(user);
    }
  };

  useEffect(() => {
    filteredSearch();
  }, [filter, user]);

  return (
    <div>
      <Container fluid="md">
        <FilterContent setFilter={setFilter} filter={filter} />
        <TableContent
          products={filteredUser}
          handleShow={handleShowAddModal}
          setUser={setUser}
        />
      </Container>
      <AddContent
        show={showAddModal}
        handleClose={handleCloseAddModal}
        setProducts={setUser}
      />
    </div>
  );
}

export default Content;