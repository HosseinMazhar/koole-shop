import { Star } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  score: number;
  title: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  score,
  title,
  price,
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-8 py-4 dark:bg-neutral-900 hover:dark:bg-neutral-800 bg-neutral-200 hover:bg-neutral-300 ho rounded-lg gap-2">
      <div className="w-full max-w-[300px] aspect-square relative">
        <Image
          src={image}
          alt="productImage"
          layout="fill"
          objectFit="contain"
          className="relative rounded-2xl"
        />
      </div>
      <p className="w-full max-w-[300px] text-left font-bold">{title}</p>
      <p className="w-full max-w-[300px] text-left font-semibold flex items-center">
        <Star />
        {score}
      </p>
      <p className="w-full max-w-[300px] text-right text-xl font-extrabold">${price}</p>
    </div>
  );
};

export default ProductCard;
