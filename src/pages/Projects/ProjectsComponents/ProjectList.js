import React, { useState } from "react";

const ProjectList = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Rural Classroom Digital Learning",
      type: "education",
      location: "Limpopo Province",
      duration: "6 months",
      focus: ["Coding", "Digital Literacy", "Computational Thinking"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      status: "completed",
      date: "2024-01-15",
      impact: "250+ children"
    },
    {
      id: 2,
      title: "Inclusive Learning for Disabled Learners",
      type: "inclusive",
      location: "Eastern Cape",
      duration: "Ongoing",
      focus: ["Assistive Technology", "Adapted Lessons", "Tactile Materials"],
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      status: "active",
      date: "2024-01-10",
      impact: "One-to-one support"
    },
    {
      id: 3,
      title: "Women & Girls Empowerment Program",
      type: "empowerment",
      location: "KwaZulu-Natal",
      duration: "12 weeks",
      focus: ["Coding Clubs", "Mentorship", "Role-model Sessions"],
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      status: "completed",
      date: "2024-01-20",
      impact: "Community-led"
    },
    {
      id: 4,
      title: "Mobile Offline-First Workshops",
      type: "mobile",
      location: "Rural Mpumalanga",
      duration: "2 weeks",
      focus: ["Offline Kits", "Teacher Training", "Mobile Learning"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      status: "completed",
      date: "2024-01-18",
      impact: "5 programs"
    },
    {
      id: 5,
      title: "Solar-Powered Learning Stations",
      type: "infrastructure",
      location: "Northern Cape",
      duration: "Ongoing",
      focus: ["Solar Power", "Offline Learning", "Digital Access"],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      status: "active",
      date: "2024-01-05",
      impact: "42+ villages"
    },
    {
      id: 6,
      title: "After-School Digital Clubs",
      type: "community",
      location: "Free State",
      duration: "Ongoing",
      focus: ["Creative Tech", "Digital Skills", "Peer Learning"],
      image: "https://images.unsplash.com/photo-1535982337055-9dd0cdfae9b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      status: "planning",
      date: "2024-02-01",
      impact: "New program"
    }
  ]);

  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <section className="project-list">
      <div className="container">
        <div className="projects-header">
          <div className="header-content">
            <h2 className="projects-title">Our Learning Programs</h2>
            <p className="projects-subtitle">
              Bringing digital skills and computational thinking to underserved communities across South Africa
            </p>
          </div>
          <div className="projects-stats">
            <div className="stat">
              <span className="stat-number">42+</span>
              <span className="stat-label">Villages</span>
            </div>
            <div className="stat">
              <span className="stat-number">3.2k</span>
              <span className="stat-label">Children</span>
            </div>
            <div className="stat">
              <span className="stat-number">89%</span>
              <span className="stat-label">Retention</span>
            </div>
          </div>
        </div>

        <div className="projects-filters">
          <button 
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Programs
          </button>
          <button 
            className={`filter-btn ${filter === "education" ? "active" : ""}`}
            onClick={() => setFilter("education")}
          >
            Education
          </button>
          <button 
            className={`filter-btn ${filter === "inclusive" ? "active" : ""}`}
            onClick={() => setFilter("inclusive")}
          >
            Inclusive
          </button>
          <button 
            className={`filter-btn ${filter === "empowerment" ? "active" : ""}`}
            onClick={() => setFilter("empowerment")}
          >
            Empowerment
          </button>
          <button 
            className={`filter-btn ${filter === "mobile" ? "active" : ""}`}
            onClick={() => setFilter("mobile")}
          >
            Mobile
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className={`project-status ${project.status}`}>
                  {project.status === "active" ? "Active" : 
                   project.status === "completed" ? "Completed" : "Planning"}
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span className={`project-type ${project.type}`}>
                    {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                  </span>
                  <span className="project-location">📍 {project.location}</span>
                </div>
                
                <div className="project-details">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{project.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Focus Areas:</span>
                    <span className="detail-value">{project.focus.join(', ')}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Impact:</span>
                    <span className="detail-value impact-value">{project.impact}</span>
                  </div>
                </div>
                
                <div className="project-actions">
                  <button className="view-details-btn">Read Case Study</button>
                  <button className="learn-more-btn">Share Impact</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="load-more">
          <button className="load-more-btn">View All Programs</button>
        </div>
      </div>

      <style jsx>{`
        .project-list {
          padding: 4rem 2rem;
          background: linear-gradient(180deg, rgba(250,250,255,1) 0%, rgba(255,255,255,1) 100%);
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .projects-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3rem;
          gap: 2rem;
        }
        
        .header-content {
          flex: 1;
        }
        
        .projects-title {
          font-size: 2.5rem;
          font-weight: 900;
          color: #04223A;
          margin: 0 0 1rem 0;
          background: linear-gradient(135deg, #7c3aed 0%, #06d6a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .projects-subtitle {
          font-size: 1.1rem;
          color: rgba(4,34,58,0.8);
          margin: 0;
          max-width: 600px;
          line-height: 1.6;
        }
        
        .projects-stats {
          display: flex;
          gap: 2rem;
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-number {
          display: block;
          font-size: 1.8rem;
          font-weight: 900;
          background: linear-gradient(135deg, #7c3aed 0%, #06d6a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: rgba(4,34,58,0.7);
          font-weight: 600;
        }
        
        .projects-filters {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .filter-btn {
          padding: 10px 20px;
          border: 2px solid rgba(4,34,58,0.1);
          background: white;
          color: rgba(4,34,58,0.8);
          border-radius: 25px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .filter-btn:hover {
          border-color: #7c3aed;
          color: #7c3aed;
        }
        
        .filter-btn.active {
          background: linear-gradient(135deg, #7c3aed 0%, #06d6a0 100%);
          color: white;
          border-color: transparent;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .project-item {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(4,34,58,0.05);
        }
        
        .project-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(2,6,23,0.12);
        }
        
        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .project-item:hover .project-image img {
          transform: scale(1.05);
        }
        
        .project-status {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: capitalize;
          background: white;
        }
        
        .project-status.completed {
          color: #06d6a0;
          border: 2px solid #06d6a0;
        }
        
        .project-status.active {
          color: #7c3aed;
          border: 2px solid #7c3aed;
        }
        
        .project-status.planning {
          color: #f39c12;
          border: 2px solid #f39c12;
        }
        
        .project-content {
          padding: 1.5rem;
        }
        
        .project-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #04223A;
          margin: 0 0 1rem 0;
          line-height: 1.4;
        }
        
        .project-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          gap: 1rem;
        }
        
        .project-type {
          padding: 6px 16px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: capitalize;
        }
        
        .project-type.education {
          background: rgba(124,58,237,0.1);
          color: #7c3aed;
        }
        
        .project-type.inclusive {
          background: rgba(6,214,160,0.1);
          color: #06d6a0;
        }
        
        .project-type.empowerment {
          background: rgba(236,72,153,0.1);
          color: #ec4899;
        }
        
        .project-type.mobile {
          background: rgba(59,130,246,0.1);
          color: #3b82f6;
        }
        
        .project-type.infrastructure {
          background: rgba(245,158,11,0.1);
          color: #f59e0b;
        }
        
        .project-type.community {
          background: rgba(139,92,246,0.1);
          color: #8b5cf6;
        }
        
        .project-location {
          font-size: 0.9rem;
          color: rgba(4,34,58,0.7);
          font-weight: 600;
        }
        
        .project-details {
          margin: 1.5rem 0;
        }
        
        .detail-item {
          display: flex;
          justify-content: space-between;
          margin: 0.75rem 0;
          font-size: 0.9rem;
        }
        
        .detail-label {
          color: rgba(4,34,58,0.7);
          font-weight: 600;
        }
        
        .detail-value {
          color: #04223A;
          font-weight: 700;
          text-align: right;
        }
        
        .impact-value {
          background: linear-gradient(135deg, #7c3aed 0%, #06d6a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .project-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        
        .view-details-btn {
          flex: 2;
          background: linear-gradient(135deg, #7c3aed 0%, #06d6a0 100%);
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 700;
          transition: all 0.3s ease;
        }
        
        .view-details-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(124,58,237,0.2);
        }
        
        .learn-more-btn {
          flex: 1;
          background: transparent;
          color: #7c3aed;
          border: 2px solid #7c3aed;
          padding: 12px 20px;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 700;
          transition: all 0.3s ease;
        }
        
        .learn-more-btn:hover {
          background: #7c3aed;
          color: white;
          transform: translateY(-2px);
        }
        
        .load-more {
          text-align: center;
        }
        
        .load-more-btn {
          background: transparent;
          color: #7c3aed;
          border: 2px solid #7c3aed;
          padding: 14px 32px;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .load-more-btn:hover {
          background: #7c3aed;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(124,58,237,0.2);
        }

        @media (max-width: 768px) {
          .project-list {
            padding: 3rem 1rem;
          }
          
          .projects-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }
          
          .projects-title {
            font-size: 2rem;
          }
          
          .projects-stats {
            width: 100%;
            justify-content: space-around;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .project-actions {
            flex-direction: column;
          }
          
          .projects-filters {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .project-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .stat-number {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectList;