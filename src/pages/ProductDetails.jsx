import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Details (ID: {id})</h1>

      <p><b>Usage:</b> Used for fever and pain relief</p>
      <p><b>Dosage:</b> 1 tablet twice a day</p>
      <p><b>Manufacturer:</b> ABC Pharma</p>
    </div>
  );
}

export default ProductDetails;