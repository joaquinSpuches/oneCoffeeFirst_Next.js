import HeaderDetalle from "../../Components/HeaderDetalle";

export default function layout({children}) {
    return(
            <div>
        <div>
            <HeaderDetalle/>    
            {children}
        </div>


    </div>
    )
};
