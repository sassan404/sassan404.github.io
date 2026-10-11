import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile, skillDetail, skillSlugs } from "../../cv-data";

export const generateStaticParams = () => skillSlugs.map((slug) => ({ slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = skillDetail(slug);

  return {
    title: detail
      ? `${detail.skill.name} | ${profile.name}`
      : `Skill | ${profile.name}`,
  };
}

export default async function SkillPage({ params }: Props) {
  const { slug } = await params;
  const detail = skillDetail(slug);

  if (!detail) notFound();

  const { skill, group, projects, experience } = detail;
  const plural = (count: number, one: string, many: string) =>
    `${count} ${count === 1 ? one : many}`;

  return (
    <section className="panel" aria-labelledby="skill-title">
      <p className="item-meta">
        <Link href="/#skills">All skills</Link> · {group.label}
      </p>
      <h2 className="section-title" id="skill-title">
        {skill.name}
      </h2>
      <p className="section-subtitle">
        Used in {plural(projects.length, "project", "projects")} and{" "}
        {plural(experience.length, "role", "roles")}.
      </p>

      <h3 className="section-subtitle-heading">
        In {plural(projects.length, "project", "projects")}
      </h3>
      {projects.length ? (
        <ul className="item-list">
          {projects.map((project) => (
            <li key={project.slug}>
              <h3>
                <Link href="/projects">{project.name}</Link>
                {project.href ? (
                  <>
                    {" "}
                    <a href={project.href}>live app</a>
                  </>
                ) : null}
              </h3>
              <p className="item-copy">{project.copy}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="section-copy">
          No listed personal project uses it yet.
        </p>
      )}

      <h3 className="section-subtitle-heading">
        In {plural(experience.length, "role", "roles")}
      </h3>
      {experience.length ? (
        <ul className="item-list">
          {experience.map((role) => (
            <li key={role.slug}>
              <div className="item-heading">
                <h3>
                  <Link href="/experience">
                    {role.role} — {role.company}
                  </Link>
                </h3>
                <span className="item-meta">
                  {role.period} · {role.place}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="section-copy">No listed role uses it yet.</p>
      )}
    </section>
  );
}