import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../../../../hook/useFetch";
import {
    TextField,
    TextareaAutosize,
    Button,
    Container,
    Grid,
    InputLabel,
    FormControl,
    Input,
    FormHelperText,
    Typography,
    Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));

const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
}));

const ActionProduct = () => {
    const navigate = useNavigate();
    const [productData, setProductData] = useState({
        id: "",
        title: "",
        description: "",
        quantity: 0,
        price: 0,
        discountPercentage: 0,
        rating: 0,
        brand: "",
        category: "",
        images: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({
            ...productData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.onloadend = () => {
            setProductData({
                ...productData,
                images: [...productData.images, reader.result],
            });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await postData("/admin/products/create", productData);

            if (response.data.success) {
                navigate("/admin/products");
            } else {
                console.error("Error creating product:", response.data.message);
            }
        } catch (error) {
            console.error("Error creating product:", error);
        }
    };

    return (
        <Container component="main" maxWidth="md">
            <StyledPaper elevation={3}>
                <Typography component="h1" variant="h5">
                    Create Product
                </Typography>
                <form onSubmit={handleSubmit} className="my-5 p-3 border">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="ID"
                                name="id"
                                value={productData.id}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Name product"
                                name="title"
                                value={productData.title}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextareaAutosize
                                minRows={3}
                                placeholder="Description"
                                name="description"
                                value={productData.description}
                                onChange={handleInputChange}
                                style={{ width: "100%" }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                type="number"
                                label="Quantity"
                                name="quantity"
                                value={productData.quantity}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Price"
                                name="price"
                                type="number"
                                value={productData.price}
                                onChange={handleInputChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Discount Percentage"
                                name="discountPercentage"
                                type="number"
                                value={productData.discountPercentage}
                                onChange={handleInputChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Rating"
                                name="rating"
                                type="number"
                                value={productData.rating}
                                onChange={handleInputChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Brand"
                                name="brand"
                                value={productData.brand}
                                onChange={handleInputChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Category"
                                name="category"
                                value={productData.category}
                                onChange={handleInputChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="productImages">Images</InputLabel>
                                <Input
                                    type="file"
                                    name="images"
                                    id="productImages"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                                <FormHelperText>Choose multiple images</FormHelperText>
                            </FormControl>
                        </Grid>

                    </Grid>
                    <StyledButton
                        type="submit"
                        variant="contained"
                        color="primary"
                        startIcon={<AddIcon />}
                        className="mt-3"
                    >
                        Create Product
                    </StyledButton>
                </form>
            </StyledPaper>
        </Container>
    );
};

export default ActionProduct;
