export default function Flashcard({
    card,           // ข้อมูลการ์ดใบปัจจุบัน (id, question, answer)
    currentIndex,   // เลขลำดับข้อปัจจุบัน (เริ่มที่ 0)
    totalCards,     // จำนวนการ์ดทั้งหมดใน Deck
    showAnswer,     // ตัวบอกว่าตอนนี้ "โชว์คำตอบ" หรือยัง (True/False)
    onReveal,       // ฟังก์ชันที่จะเรียกเมื่อกดปุ่ม "Reveal Answer"
    onNext,         // ฟังก์ชันที่จะเรียกเมื่อกดปุ่ม "Yes/No"
    score           // คะแนนปัจจุบัน
}) {
    return (
        <div>


            {/* คำถามที่ ... */}
            <h3 className="text-2xl font-semibold mb-6">
                Question {currentIndex+1} of {totalCards}
            </h3>

            {/* เริ่มส่วนการ์ด */}
            <div className="border border-slate-200 rounded-xl p-8 min-h-[300px] flex flex-col justify-center items-center text-center shadow-md bg-white">

                {/* คำถาม */}
                {card.question}

            
                <div>
                    {/* ตรวจสอบเงื่อนไข ขึ้นอยู่กับกด show answer รึยัง */}
                    {showAnswer ?

                        // if true
                        <div>
                            {/* เส้นคั่นเมื่อคำตอบแสดง */}
                            <div className="w-full h-px bg-slate-200 my-6"></div>

                            {/* คำตอบ */}
                            <p className="text-lg mb-8">
                                {card.answer}
                            </p>

                            {/* ปุ่มให้เลือกว่าจำได้หรือไม่ */}
                            <div className="flex gap-4 justify-center">
                                <button onClick={() => (onNext(true))} className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg shadow-sm w-24">
                                    Yes
                                </button>
                                <button onClick={() => (onNext(false))} className="px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white font-medium rounded-lg shadow-sm w-24">
                                    No
                                </button>
                            </div>
                        </div>

                        :

                        // if false
                        <button onClick={onReveal} className="border border-slate-200 shadow-md">
                            Reveal Answer
                        </button>
                    }
                </div>
            </div>

            {/* บอกคะแนนปัจจุบัน */}
            <div>
                Current Score: {score}
            </div>


        </div>
    );
}