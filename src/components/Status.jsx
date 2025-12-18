
export default function Develop(props){

    
    if(props.status == "developing"){

        return(

        <div className="mt-10 w-25 bg-red-500 rounded-2xl">
            <p className="justify-self-center text-center">Developing</p>
        </div>

        );

    }
}
