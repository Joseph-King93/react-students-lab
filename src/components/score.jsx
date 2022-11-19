export default function StudentScore({date, score}) {
    return (
        <>
            <strong className='date'>Date: </strong>{date}
            <br></br>
            <strong className='scores'>Score: </strong>{score}
            <br></br>
            <br></br>
        </>

    )
}