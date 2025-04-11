
import React from "react";
import { Calendar, Github, Users, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  date: string;
  teamSize: number;
  objective: string;
  summary: string;
  role: string;
  technologies: string[];
  gitLink?: string;
  demoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  date,
  teamSize,
  objective,
  summary,
  role,
  technologies,
  gitLink,
  demoLink,
}) => {
  return (
    <div className="glass rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] neu-shadow">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>Team Size: {teamSize}</span>
          </div>
        </div>
        
        <div className="space-y-3 mb-4">
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground">Objective</h4>
            <p className="text-sm">{objective}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground">Summary</h4>
            <p className="text-sm">{summary}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground">Role</h4>
            <p className="text-sm">{role}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-3 mt-4">
          {gitLink && (
            <Button variant="outline" size="sm" asChild className="gap-2">
              <a
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="h-4 w-4" />
                <span>Code</span>
              </a>
            </Button>
          )}
          
          {demoLink && (
            <Button size="sm" asChild className="gap-2">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
