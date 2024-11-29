import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const addProductSchema = Yup.object().shape({});


const AddProduct = () => {

    const navigate = useNavigate();

    const [selFile, setSelFile] = useState("");

    const addProductForm = useFormik({
        initialValues: {
            name: "",
            category: "decor-item",
            price: "",
            discription: "",
            material: "",
            image: "",
        },

        onSubmit: async (values, action) => {
            values.image = selFile;
            console.log(values);
            const res = await fetch("http://localhost:5000/product/add", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-Type": "application/json" },
            });
            console.log(res.status);
            action.resetForm();
            if (res.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Item Uploaded Successfully",
                });
                navigate('/productlist');
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Something went wrong",
                });
            }
        },

        validationSchema: addProductSchema,
    });

    const uploadFile = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setSelFile(file.name);
        const fd = new FormData();
        fd.append("myfile", file);
        fetch("http://localhost:5000/util/uploadfile", {
            method: "POST",
            body: fd,
        }).then((res) => {
            if (res.status === 200) {
                console.log("file uploaded");
            }
        });
    };

    return (
        <div className="loginbg mt-5">
            <div className='signupbg p-5 mt-5 mb-5 position-relative'>
                <div className="d-flex justify-content-center align-items-center  vh-100  mt-3 ">
                    <div className="card w-25 mt-5 shadow-lg rounded-5  ">
                        <div className="card-body ">
                            <h4 className="text-center my-2 text-dark">Add Items</h4>
                            <form onSubmit={addProductForm.handleSubmit}>
                                <div className='m-0'>
                                    <label htmlFor="">Items Name</label>
                                    <p className='error-label'> {addProductForm.touched.name && addProductForm.errors.name}</p>
                                    <input className="form-control mb-2 rounded-3" type="text" name="name" onChange={addProductForm.handleChange} value={addProductForm.values.name} />
                                </div>
                                <div>
                                    <label className='m-0' htmlFor="">Price</label>
                                    <p className='error-label'>{addProductForm.touched.name && addProductForm.errors.name}</p>
                                    <input className="form-control mb-2 rounded-3" type="number" name="price" onChange={addProductForm.handleChange} value={addProductForm.values.price} />
                                </div>
                                <div>
                                    <label htmlFor="">Discription</label>
                                    <p className='error-label'> {addProductForm.touched.name && addProductForm.errors.name}</p>
                                    <textarea className="form-control mb-2 rounded-3" name="discription" type="discription" onChange={addProductForm.handleChange} value={addProductForm.values.discription}></textarea>
                                </div>
                                <div>
                                    <label className='m-0' htmlFor="">Material</label>
                                    <p className='error-label'>{addProductForm.touched.name && addProductForm.errors.name}</p>
                                    <input className="form-control mb-2 rounded-3" type="material" name="material" onChange={addProductForm.handleChange} value={addProductForm.values.material} />
                                </div>
                                <div>
                                    <label htmlFor="file">Upload Image</label>
                                    <input type="file" name="" onChange={uploadFile} />
                                </div>
                                <div>
                                    <button type='submit' onChange={addProductForm.handleChange} className="btn btn-danger w-100 mt-3 rounded-3 mb-5 ">Add Items</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddProduct;