import StudentScore from './score';

export default function StudentInfo({name, bio, student}) {
    return (
        <>
            <strong className='name'>{name}</strong>
            <br></br>
            <br></br>
            <u className='bio'><b>Bio</b></u>
            <p>{bio}</p>
            <u className='bio'><b>Quizzes</b></u>
            <br></br>
            {student.scores.map(quiz => (
                <StudentScore          
                date={quiz.date} 
                score={quiz.score} 
                    />
                ))
            }
        </>
    )
}