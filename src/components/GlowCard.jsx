import React, { useRef } from 'react'

const GlowCard = ({ card, children }) => {
    const cardRef = useRef(null);
    const rafRef = useRef(null);

    const handleMouseMove = (e) => {
        if (rafRef.current) return;
        const clientX = e.clientX;
        const clientY = e.clientY;
        rafRef.current = requestAnimationFrame(() => {
            rafRef.current = null;
            const el = cardRef.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const mouseX = clientX - rect.left - rect.width / 2;
            const mouseY = clientY - rect.top - rect.height / 2;

            let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
            angle = (angle + 360) % 360;
            el.style.setProperty('--start', angle + 60);
        });
    };

  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column">
      <div className='glow'/>
        <div className='flex items-center gap-1 mb-5'>
            {Array.from({ length: 5 }, (_, i) => (
                <img src="/images/star.png" key={i} alt="star" loading="lazy" decoding="async" className='size-5' />
            ))}
        </div>
        <div className='mb-5'>
            <p className='text-white-50 text-lg'>{card.review}</p>
        </div>
        {children}
    </div>
  )
}

export default GlowCard