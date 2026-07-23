/**
 * Portfolio — Projects Renderer
 * Renders project entries dynamically into the projects container.
 */

const PROJECTS_DATA = [
    {
        "id": 8,
        "title": "MS Logistics Premium Corporate Website",
        "category": "Web Development",
        "focus": "Logistics & Supply Chain",
        "year": "2026",
        "featured": true,
        "tools": [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive Design",
            "UI/UX Design"
        ],
        "summary": "Designed and developed a premium, fully responsive corporate website for MS Logistics Private Limited, showcasing logistics, international relocation, customs clearance, warehousing, freight forwarding, and commercial moving services. The project emphasizes modern UI/UX, smooth animations, optimized performance, and a professional digital presence.",
        "impact": "Established a strong online presence for MS Logistics, improving customer engagement, brand credibility, and accessibility through a fast, responsive, and visually appealing corporate website.",
        "tags": [
            "Corporate Website",
            "Logistics",
            "Freight",
            "Supply Chain",
            "Responsive",
            "UI/UX",
            "Business Website"
        ],
        "reportUrl": "MSLogistics/index.html",
        "reportLabel": "View Live Website",
        "previewPath": "MSLogistics/index.html",
        "previewLabel": "Quick Preview",
        "type": "Professional Web Development Project"
    }
];

function renderProjects(filter = 'all') {
    const container = document.getElementById('projects-container');
    if (!container) return;

    const filtered = filter === 'all'
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter(p => p.category === filter || p.focus === filter || p.type === filter);

    if (filtered.length === 0) {
        container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 40px;">No projects in this category yet.</p>';
        return;
    }

    container.innerHTML = filtered.map(project => {
        const toolsBadges = project.tools.map(tool => `<span class="tool-badge">${tool}</span>`).join('');
        const tagsBadges = project.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join('');
        const featuredBadge = project.featured ? '<span class="featured-badge"><i class="fas fa-star"></i> Featured</span>' : '';

        return `
        <article class="project-card" data-category="${project.category}" data-type="${project.type}">
            <div class="project-card__header">
                <div class="project-card__meta">
                    <span class="project-card__category"><i class="fas fa-folder"></i> ${project.category}</span>
                    <span class="project-card__year">${project.year}</span>
                    ${featuredBadge}
                </div>
                <h3 class="project-card__title">${project.title}</h3>
                <p class="project-card__focus"><i class="fas fa-bullseye"></i> ${project.focus}</p>
            </div>

            <div class="project-card__body">
                <p class="project-card__summary">${project.summary}</p>
                <div class="project-card__impact">
                    <strong><i class="fas fa-chart-line"></i> Impact:</strong>
                    <p>${project.impact}</p>
                </div>
                <div class="project-card__tools">
                    <strong>Tools & Technologies:</strong>
                    <div class="project-card__badges">${toolsBadges}</div>
                </div>
                <div class="project-card__tags">
                    <strong>Tags:</strong>
                    <div class="project-card__badges">${tagsBadges}</div>
                </div>
            </div>

            <div class="project-card__footer">
                <a href="${project.reportUrl}" class="btn btn-primary" target="_blank" rel="noopener">
                    <i class="fas fa-external-link-alt"></i> ${project.reportLabel}
                </a>
                <a href="${project.previewPath}" class="btn btn-secondary" target="_blank" rel="noopener">
                    <i class="fas fa-eye"></i> ${project.previewLabel}
                </a>
            </div>
        </article>`;
    }).join('');
}

function initProjectFilters() {
    const filterContainer = document.getElementById('projects-filter');
    if (!filterContainer) return;

    filterContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;

        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        renderProjects(btn.dataset.filter);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
    initProjectFilters();
});
