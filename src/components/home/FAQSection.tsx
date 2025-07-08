import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section className="max-w-2xl mx-auto my-16 px-4">
      <h2 className="mb-6 text-center">Những câu hỏi thường gặp ?</h2>

      <Accordion type="single" collapsible className="w-full space-y-2">
        {/* 1 */}
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:text-indigo-500 text-base">
            Blog này viết về gì?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base">
            Mình chia sẻ kinh nghiệm lập trình web (React, Next.js) và hành
            trình freelance thực tế.
          </AccordionContent>
        </AccordionItem>

        {/* 2 */}
        <AccordionItem value="item-2">
          <AccordionTrigger className="hover:text-indigo-500 text-base">
            Tôi mới học web thì bắt đầu từ đâu?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base">
            Học HTML/CSS cơ bản, sau đó React, rồi đến Next.js. Trên blog có
            series “React cơ bản” để bạn bắt đầu.
          </AccordionContent>
        </AccordionItem>

        {/* 3 */}
        <AccordionItem value="item-3">
          <AccordionTrigger className="hover:text-indigo-500 text-base">
            Bạn dùng công nghệ gì để build blog này?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base">
            Next.js (App Router), TailwindCSS, TypeScript; nội dung viết bằng
            Markdown, deploy trên Vercel.
          </AccordionContent>
        </AccordionItem>

        {/* 4 */}
        <AccordionItem value="item-4">
          <AccordionTrigger className="hover:text-indigo-500 text-base">
            Bạn có nhận dự án freelance không?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base">
            Có, nhưng tuỳ thời gian. Nếu bạn có dự án nhỏ hoặc muốn hợp tác, hãy
            liên hệ qua trang “Liên hệ”.
          </AccordionContent>
        </AccordionItem>

        {/* 5 */}
        <AccordionItem value="item-5">
          <AccordionTrigger className="hover:text-indigo-500 text-base">
            Viết blog đều đặn có khó không?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base">
            Khó nhất là duy trì thói quen. Mình đặt mục tiêu mỗi tuần một bài và
            ghi lại ý tưởng ngay khi nảy ra.
          </AccordionContent>
        </AccordionItem>

        {/* 6 */}
        <AccordionItem value="item-6">
          <AccordionTrigger className="hover:text-indigo-500 text-base">
            Tôi có thể hỏi hoặc góp ý cho bạn ở đâu?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base">
            Bạn có thể để lại bình luận dưới bài viết, gửi email hoặc nhắn tin
            qua Facebook; mình luôn phản hồi sớm nhất có thể.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
