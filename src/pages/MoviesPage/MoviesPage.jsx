import { Form, Formik, Field } from "formik";
import { useEffect } from "react";

const MoviesPage = () => {
  useEffect(() => {
    document.title = "Home-work #5 | Movies";
  }, []);

  const initialValues = {
    movie: "",
  };
  const handleSubmit = (value) => {
    console.log(value);
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="movie" placeholder="Введіть назву "></Field>
          <button type="submit">Search Movie</button>
        </Form>
      </Formik>
    </div>
  );
};

export default MoviesPage;
