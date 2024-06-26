import FavoriteStock from "./FavoriteStock";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
//Favorites component that adds user's favorites
//Add dynamically
const Favorites = (height, width) => {
  const FavoritesStyle = {
    minHeight: height,
    minWidth: width,
  };
  return (
    <div
      className="bg-secondary-green w-full h-full mb-4 shadow"
      style={FavoritesStyle}
    >
      <h1 className="basic_text text-2xl p-3">Favorites</h1>
      <div className="flex flex-col m-3 items-center h-full favorites_hidden">
        <div className="favorite-stock-container ">
          <FavoriteStock
            stock_image="/assets/images/s&p500images/apple.svg"
            stock_ticker="APPL"
            stock_price="171.48"
            stock_vector="M10 80 C 30 50, 50 30, 70 80 S 90 50, 110 80 C 130 110, 150 80, 170 70 S 190 60, 200 80"
            stock_name="apple"
            stock_direction="down"
          />
          <FavoriteStock
            stock_image="/assets/images/Microsoft-logo.svg"
            stock_ticker="MSFT"
            stock_price="420.72"
            stock_vector="M10 90 C 40 40, 80 60, 120 70 S 160 50, 250 60 C 240 70, 280 40, 320 70"
            stock_name="Microsoft"
            stock_direction="up"
          />
          <FavoriteStock
            stock_image="/assets/images/amazon-logo.svg"
            stock_ticker="AMZN"
            stock_price="180.38"
            stock_vector="M10 80 C 40 40, 80 60, 120 80 S 160 60, 200 80 C 240 20, 280 40, 320 80 C 360 160, 400 160, 500 160"
            stock_name="Amazon"
          />
          <FavoriteStock
            stock_image="/assets/images/meta-logo.svg"
            stock_ticker="META"
            stock_price="485.58"
            stock_vector="M10 80 C 40 90, 80 50, 120 60 S 160 80, 200 50 C 240 20, 280 40, 320 60"
            stock_name="apple"
            stock_direction="up"
          />
          <FavoriteStock
            stock_image="/assets/images/s&p500images/3m.svg"
            stock_ticker="3M"
            stock_price="106.07"
            stock_vector="M10 80 C 40 90, 80 50, 120 60 S 160 20, 200 50 C 240 20, 230 40, 320 60"
            stock_name="apple"
            stock_direction="down"
          />
          <FavoriteStock
            stock_image="/assets/images/s&p500images/merck.svg"
            stock_ticker="MRK"
            stock_price="131.95"
            stock_vector="M10 80 C 40 20, 80 50, 120 60 S 160 80, 200 50 C 240 20, 280 40, 320 60"
            stock_name="apple"
            stock_direction="up"
          />
          <FavoriteStock
            stock_image="/assets/images/s&p500images/nike.svg"
            stock_ticker="NKE"
            stock_price="93.98"
            stock_vector="M10 80 C 40 90, 80 50, 130 60 S 160 80, 220 50 C 240 20, 280 40, 320 60"
            stock_name="apple"
            stock_direction="up"
          />
        </div>
        <div className="flex flex-1 justify-center items-center overflow-auto text-white cursor-pointer">
          <AddCircleOutlineIcon />
        </div>
      </div>
    </div>
  );
};

export default Favorites;
