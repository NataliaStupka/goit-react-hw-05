import { Form, Formik, Field } from "formik";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const SearchBar = ({ onSearchValue }) => {
  //початкові значення
  const initialValues = {
    query: "",
  };

  const handleSubmit = (value) => {
    // console.log(value.query);
    if (value.query === "") {
      toast.error("Введіть назву в поле пошуку!");
    }

    //передаю в MoviesPage що шукаю
    onSearchValue(value.query);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="query" placeholder="Введіть назву "></Field>
          <button type="submit">Search </button>
        </Form>
      </Formik>
    </div>
  );
};

SearchBar.propTypes = {
  onSearchValue: PropTypes.func.isRequired,
};

export default SearchBar;
