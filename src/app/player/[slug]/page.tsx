import UserBar from '@/app/components/UserBar';

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <UserBar param={params.slug} />
    </div>
  );
};

export default page;
