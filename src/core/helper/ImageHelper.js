import Recat from "react";

const ImageHelper = ({ product }) => {
    const imageurl = product
    ? product.image
    : `https://placeimg.com/640/480/nature`
    return (
        <div className="rounded border border-success p-2">
            <img 
                src={imageurl}
                style={{ maxHeight: "100%", maxWidth: "100%" }}
                className="mb-3 rounded"
                alt=""
            />
        </div>
    )

}

export default ImageHelper;