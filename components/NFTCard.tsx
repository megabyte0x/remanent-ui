/* eslint-disable @next/next/no-img-element */
type Props = {};

const NFTCard = (props: Props) => {
    return (
        <div className="group block cursor-pointer" role="NFT Card">
            <div className="relative overflow-hidden rounded-md object-contain">
                <img
                    className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                    src="https://www.hyperui.dev/photos/university-1.jpeg"
                    alt=""
                />
            </div>

            <div className="p-4">
                <h5 className="text-xl font-bold">
                    Finding the Journey to Mordor
                </h5>
                <p className="mt-2 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsa libero labore natus atque, ducimus sed.
                </p>
            </div>
        </div>
    );
};

export default NFTCard;
