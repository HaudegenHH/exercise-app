import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const GYM_BASE_URL = 'https://exercisedb.p.rapidapi.com';
const YT_BASE_URL = 'https://youtube-search-and-download.p.rapidapi.com'

// exercises by id
// 'https://exercisedb.p.rapidapi.com/exercises/exercise/%7Bid%7D'

// related videos from youtube
// 'https://youtube-search-and-download.p.rapidapi.com/video/related'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async (id) => {
      const exerciseDetailData = 
        await fetchData(`${GYM_BASE_URL}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideosData = 
        await fetchData(`${YT_BASE_URL}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setExerciseVideos(exerciseVideosData.contents)

      const targetMuscleExercisesData = 
        await fetchData(`${GYM_BASE_URL}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
      setTargetMuscleExercises(targetMuscleExercisesData)

      const equipmentExercisesData = 
        await fetchData(`${GYM_BASE_URL}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
      setEquipmentExercises(equipmentExercisesData)
    }

    fetchExercisesData(id)

  }, [id])

  if (!exerciseDetail) return <div>No Data</div>;
  
  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises} 
        equipmentExercises={equipmentExercises}  
      />
    </Box>
  )
}

export default ExerciseDetail