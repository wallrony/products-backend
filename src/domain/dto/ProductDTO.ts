import DTO from "./DTO";

interface ProductDTO extends DTO {
  name: string;
  price: number;
  image_path?: string;
}

export default ProductDTO;
