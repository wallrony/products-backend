import DTO from "./DTO";

interface UpdateProductDTO extends DTO {
  id: number;
  name: string;
  price: number;
}

export default UpdateProductDTO;
