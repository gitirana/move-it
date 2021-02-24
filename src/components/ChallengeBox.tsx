import style from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={style.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={style.challengeActive}>
          <header>Ganhe 400xp</header>

          <main>
            <img src="icons/body.svg" alt="Body" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>

          <footer>
            <button type="button" className={style.challengeFailedButton}>
              Falhei
            </button>
            <button type="button" className={style.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={style.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio.</strong>
          <p>
            <img src="icons/level-up.svg" alt="LevelUp" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
