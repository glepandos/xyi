"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle, X } from "lucide-react";

type Props = { className?: string };

export default function RequestModal({ className = "" }: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });
      if (!response.ok) throw new Error("Не удалось отправить заявку");
      setStatus("success");
      setName("");
      setPhone("");
    } catch {
      setStatus("error");
    }
  }

  function close() {
    setOpen(false);
    setStatus("idle");
  }

  return (
    <>
      <button type="button" className={`button ${className}`} onClick={() => setOpen(true)}>
        Оставить заявку <ArrowUpRight size={16} />
      </button>
      {open && (
        <div className="request-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
          <section className="request-modal" role="dialog" aria-modal="true" aria-labelledby="request-title">
            <button type="button" className="request-close" aria-label="Закрыть" onClick={close}><X size={20} /></button>
            {status === "success" ? (
              <div className="request-result">
                <CheckCircle2 size={42} color="#c7ff45" />
                <h2 id="request-title">Заявка отправлена!</h2>
                <p>Спасибо. Мы свяжемся с вами в ближайшее время.</p>
                <button type="button" className="button" onClick={close}>Закрыть</button>
              </div>
            ) : (
              <>
                <div className="eyebrow">Fresh Auto</div>
                <h2 id="request-title">Оставить заявку</h2>
                <p className="request-description">Оставьте контакты — мы перезвоним и ответим на ваши вопросы.</p>
                <form onSubmit={submit} className="request-form">
                  <label>Ваше имя<input required minLength={2} maxLength={80} autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Как к вам обращаться?" /></label>
                  <label>Номер телефона<input required type="tel" minLength={6} maxLength={30} autoComplete="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="+7 (___) ___-__-__" /></label>
                  {status === "error" && <p className="request-error">Не удалось отправить заявку. Попробуйте ещё раз позже.</p>}
                  <button type="submit" className="button request-submit" disabled={status === "sending"}>
                    {status === "sending" ? <><LoaderCircle className="request-spinner" size={17}/> Отправляем...</> : <>Отправить заявку <ArrowUpRight size={16}/></>}
                  </button>
                </form>
                <p className="request-privacy">Нажимая кнопку, вы соглашаетесь на обработку контактных данных для связи с вами.</p>
              </>
            )}
          </section>
        </div>
      )}
    </>
  );
}
