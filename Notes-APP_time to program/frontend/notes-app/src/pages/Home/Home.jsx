import NoteCard from "../../components/Cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="Meeting"
            date="3rd April 2024"
            content="Meeting April, 7th 2024"
            tags="#meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
