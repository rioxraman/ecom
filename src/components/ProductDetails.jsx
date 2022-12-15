const ProductDetails = ({ productDetails, handleClick }) => {
    return (
        <>
            <div className="container mt-5 text-center">
                <img src={productDetails?.thumbnail}></img>
                <h2 className="mt-2">{productDetails?.title.toUpperCase()}</h2>
                <div>{productDetails?.description}</div>
                <div>{productDetails?.price}</div>
                {productDetails && (
                    <button
                        className="btn btn-primary"
                        onClick={(e) => handleClick(e, productDetails)}
                    >
                        ADD TO CART
                    </button>
                )}
            </div>
        </>
    );
};
export default ProductDetails;
    