import Navbar from '../../components/Navbar/Navbar';
import useGetUser from '../../hooks/useGetUser';
import PageLayout from '../../layouts/PageLayout/PageLayout';

const ProfilePage = () => {
  const { user } = useGetUser();

  return (
    <>
      <Navbar />
      <PageLayout>
        <h3>Profile Page</h3>
        <p>Welcome {user?.fullName}</p>
      </PageLayout>
    </>
  );
};

export default ProfilePage;
