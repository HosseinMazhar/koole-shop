import { Star } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface ProductCardProps {
  image: string;
  score: number;
  title: string;
  price: number;
  id: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  score,
  title,
  price,
  id,
}) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleNavigation = (): void => {
    router.push(`${pathName}/${id}`);
  };

  return (
    <div
      className="w-full flex flex-col justify-center items-center px-8 py-4 dark:bg-neutral-900 hover:dark:bg-neutral-800 bg-neutral-200 hover:bg-neutral-300 ho rounded-lg gap-2 cursor-pointer select-none"
      onClick={handleNavigation}
    >
      <div className="w-full max-w-[300px] aspect-square relative cursor-pointer">
        <Image
          src={image}
          alt="productImage"
          layout="fill"
          objectFit="contain"
          className="relative rounded-2xl cursor-pointer"
        />
      </div>
      <p className="w-full max-w-[300px] text-left font-bold cursor-pointer">
        {title}
      </p>
      <p className="w-full max-w-[300px] text-left font-semibold flex items-center cursor-pointer dark:text-yellow-500 text-yellow-700">
        <Star />
        {score}
      </p>
      <p className="w-full max-w-[300px] text-right text-xl font-extrabold cursor-pointer">
        ${price}
      </p>
    </div>
  );
};

export default ProductCard;
