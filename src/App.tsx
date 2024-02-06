import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Нет",
      "Ты уверена?",
      "Ти действительно уверена?",
      "Подумайте еще раз!",
      "Последний шанс!",
      "Конечно, нет?",
      "Ти можешь пожалеть об этом!",
      "Так близко, но так далеко. Подумай...",
      "Подумай еще раз!",
      "Ты абсолютно уверена?",
      "Это может быть ошибкой!",
      "Это даже не смешно...",
      "Прислушайся к сердцу!",
      "Не будь такой холодной!",
      "Мы можем найти компромисс, правда?",
      "Мы все делаем ошибки, правда?",
      "Передумала?",
      "Даже мои друзья были удивлены...",
      "А ты можешь передумать?",
      "Не бросай меня!",
      "Это не конец истории, верно?",
      "Это твой окончательный ответ?",
      "Ты разбила мне сердце ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-container">Yep &#10084;&#65039;</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-container">Будешь моей Валентинкой?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Да
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "Нет" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
