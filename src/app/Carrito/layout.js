import HeaderDetalle from "../../Components/HeaderDetalle";

export default function layout({children}) {
    return(
        <div>
            <HeaderDetalle />
            {children}
        </div>
    )
};
