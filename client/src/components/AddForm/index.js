import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {ADD_RECIPE} from "../../utils/Mutations"
import {useMutation} from '@apollo/client'
// import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

function AddFormModal() {
  let [recipe, setRecipe] = useState({recipeName:'',recipeText:'', ingredients:''})
  const [show, setShow] = useState(false);
  const [add_Recipe, { error }] = useMutation(ADD_RECIPE)

  const handleClose = async () => {
    let form = document.querySelector("form")
    const formData = new FormData(form)

    try{

     setRecipe(recipe = {recipeName:formData.get("recipeName"),recipeText:formData.get('recipeText'),ingredients:formData.get('ingredients')})
      console.log(recipe)
      let {data}= await add_Recipe({variables: recipe})
      
    }catch(e){
      console.log(e)
    }
    window.location.assign('/dashboard')
    setShow(false)

    
  };



  const handleShow = () => setShow(true);

  const [file, setFile] = useState(null);

  const onInputChange = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  };
  
  
  return (
    <>
      <Button className="my-3" variant="primary" onClick={handleShow}>
        Add New!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add a New Recipe </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> What's the name of this dish? </Form.Label>
              <Form.Control type="input" placeholder="Dish Name" autoFocus name="recipeName" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label> Ingredients </Form.Label>
              <p> Seperate each ingredient with a comma.</p>
              <Form.Control as="textarea" name="ingredients" rows={3} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label> Instructions </Form.Label>
              <Form.Control as="textarea" name="recipeText" rows={3} />
            </Form.Group>

            <div>
              <form method="post" action="#" id="#">
                <div className="form-group files">
                  <label>Upload Your File </label>
                  <input
                    type="file"
                    onChange={onInputChange}
                    className="form-control"
                    multiple=""
                  />
                </div>
              </form>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add to My Recipes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddFormModal;
