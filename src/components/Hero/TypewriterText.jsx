import { useState, useEffect } from 'react';
import './TypewriterText.css';

function TypewriterText({ texts, speed = 120, pauseTime = 2000 }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      
      return () => clearTimeout(pauseTimeout);
    }

    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setIsPaused(true);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, isPaused, pauseTime]);

  // Função para dividir o texto em duas linhas
  const formatText = (text) => {
    const words = text.split(' ');
    if (words.length >= 2) {
      return {
        firstLine: words[0],
        secondLine: words.slice(1).join(' ')
      };
    }
    return {
      firstLine: text,
      secondLine: ''
    };
  };

  const { firstLine, secondLine } = formatText(currentText);
  
  // Determinar onde colocar o cursor
  const firstLineComplete = currentText.includes(' ');
  const showCursorOnSecondLine = firstLineComplete && secondLine.length > 0;

  return (
    <span className="typewriter-text">
      <span className="typewriter-lines">
        <span className="typewriter-line typewriter-highlight">
          {firstLine}
          {!firstLineComplete && <span className="cursor">|</span>}
        </span>
        <span className="typewriter-line typewriter-highlight">
          {secondLine}
          {showCursorOnSecondLine && <span className="cursor">|</span>}
          {!showCursorOnSecondLine && firstLineComplete && currentText.endsWith(' ') && <span className="cursor">|</span>}
        </span>
      </span>
    </span>
  );
}

export default TypewriterText;