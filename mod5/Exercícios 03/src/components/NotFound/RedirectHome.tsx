import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectHomeAfterDelay: React.FC = () => {
    const navigateTo = useNavigate();
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        // Redireciona para a página inicial após 3 segundos
        navigateTo('/');
      }, 3000);
  
      // Limpando o timeout caso o componente seja desmontado antes do tempo
      return () => clearTimeout(timeoutId);
    }, [history]);
  
    return (
      <div>
        <p>Redirecionando para a página inicial em 3 segundos...</p>
      </div>
    );
  };

export {RedirectHomeAfterDelay}