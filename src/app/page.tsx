import ProductDetails from "@/components/product details/ProductDetails";
import ProductImage from "@/components/product image/ProductImage";
import { Wrapper, Wrap} from './HomeStyle.style'
import RecommendedVideos from "@/components/recommended/recommended videos/RecommendedVideos";
import ImageStand from "@/components/image stand/ImageStand";

export default function Home() {
  return (
    <main className="md:flex md:p-6">
      <Wrapper>
        <Wrap>
        <ImageStand />
        <ProductImage />
        </Wrap>
        <RecommendedVideos />
      </Wrapper>
      <ProductDetails/>
    </main>
  );
}
