import Container from '@/components/container/Container';
import useAuth from '@/hooks/useAuth';

const Profile = () => {
  const { userData } = useAuth();
  return (
    <main>
      <Container>
        <p>{userData?.username}</p>
        <p>{userData?.email}</p>
      </Container>
    </main>
  );
};
export default Profile;
