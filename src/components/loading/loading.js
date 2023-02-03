import Skeleton from '@mui/material/Skeleton';
import Container from '@mui/material/Container';

export default function Loading() {
  return (
    <Container sx={{pt:5}}>
      <Skeleton animation='wave' height={120}/>
      {[...Array(15)].map((_, i) => <Skeleton key={i} animation='wave' height={50}/>)}
    </Container>
  );
}