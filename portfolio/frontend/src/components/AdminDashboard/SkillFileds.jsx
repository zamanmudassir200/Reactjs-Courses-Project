const SkillFileds = ({ skillData, handleSkillsInputChange }) => {
  return (
    <form className="space-y-4">
      <input
        type="text"
        name="skillName"
        placeholder="Skill Name"
        value={skillData.skillName}
        onChange={handleSkillsInputChange}
        className="w-full text-2xl border p-2 rounded"
      />
      <input
        type="file"
        name="skillImage"
        onChange={handleSkillsInputChange}
        className="w-full text-2xl border p-2 rounded"
      />
    </form>
  );
};

export default SkillFileds;
