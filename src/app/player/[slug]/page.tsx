import MatchList from '@/app/components/MatchList';
import UserBar from '@/app/components/UserBar';

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <UserBar param={params.slug} />
      <MatchList />
    </div>
  );
};

export default page;
