import DTO from "./DTO";

interface UpdateProductDTO extends DTO {
  id: number;
  name: string;
  price: number;
  image_path?: string;
}

export default UpdateProductDTO;
