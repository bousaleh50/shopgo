import blackIphone from "../../assets/images/Gamepad.png";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteForeverOutlined from '@mui/icons-material/DeleteForeverOutlined';
import "./style.css";

function WishListProductCard() {
    return (
        <div className="card flex flex-col border-2  shrink-0 w-1/2 h-2/5  md:w-2/12 md:h-2/12">
            {/** card Header */}
            <div className="flex flex-col ">
                <div className="flex justify-between p-2">
                    <div>
                    <p className="bg-red-500 text-white p-2 rounded">-40%</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <DeleteForeverOutlined className=""/>
                    </div>
                </div>
                <div className="flex">
                    <img src={blackIphone} alt="" className="flex-shrink grow-1"/>
                </div>
                <div className="flex-1 bg-black text-white p-2 text-center">
                    <button >Add To Bag</button>
                </div>
            </div>
            {/**card Footer */}
            <div className="">
                <div className="text-xl uppercase">
                    <p>Havit hv-g92 Gamepad</p>
                </div>
                <div className="flex gap-4">
                    <p className="text-red-500">$120</p>
                    <p className="text-gray-400 line-through">$120</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p className="text-gray-40à">(86)</p>
                </div>
            </div>
        </div>
    );
}

export default WishListProductCard;