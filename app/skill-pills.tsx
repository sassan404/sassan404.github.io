import Link from "next/link";

export default function SkillPills({
  skills,
}: {
  skills: readonly { slug: string; name: string }[];
}) {
  if (!skills.length) return null;

  return (
    <ul className="pill-list">
      {skills.map((skill) => (
        <li key={skill.slug}>
          <Link className="pill" href={`/skills/${skill.slug}`}>
            {skill.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}