
const CurrentDate = () => {

    const date = new Date();  
    

    return (
        <>
            <h3>{date.toLocaleDateString()}</h3>
            
        </>
    );
};


export default CurrentDate;