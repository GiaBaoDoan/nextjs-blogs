import CommentListTable from "@/components/comments/CommentListTable";

const CommentTablePage = () => {
  return (
    <div className="container py-10">
      <article>
        <h3>Bình luận </h3>
      </article>
      <CommentListTable />
    </div>
  );
};

export default CommentTablePage;
