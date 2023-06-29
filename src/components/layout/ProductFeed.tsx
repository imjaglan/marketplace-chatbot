import { FC } from "react";
import Product from "./Product";

interface Data {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductFeedProps {
  data: Data[];
}

const ProductFeed: FC<ProductFeedProps> = ({ data }) => {
  return (
    <div className="grid grid-flow-row-dense  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto">
      {data
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
      <img
        src="https://links.papareact.com/dyz"
        alt="banner"
        className="md:col-span-full rounded-md"
      />
      <div className="md:col-span-2 ">
        {data
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>

      {data
        .slice(5, data.length)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
    </div>
  );
};

export default ProductFeed;
