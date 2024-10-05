--
-- Name: Comments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Comments" (
    id bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    comment text,
    post bigint
);


ALTER TABLE public."Comments" OWNER TO postgres;

--
-- Name: TABLE "Comments"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public."Comments" IS 'comments on posts';


--
-- Name: Comments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Comments" ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."Comments_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: Posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Posts" (
    id bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    course text,
    difficultyrating smallint,
    contentrating smallint,
    review text,
    likes bigint
);


ALTER TABLE public."Posts" OWNER TO postgres;

--
-- Name: TABLE "Posts"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public."Posts" IS 'Table containing posts';


--
-- Name: Posts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Posts" ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."Posts_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

INSERT INTO public."Posts" (id, created_at, course, difficultyrating, contentrating, review, likes) 
VALUES
(4, '2024-04-16 00:11:11', 'CIS 2166', 3, 3, 'asdf', 11),
(11, '2024-04-16 15:30:33', 'CIS 2033', 4, 5, 'i like this class from dr abha\n\ncool content and a good amount of work', 27),
(15, '2024-04-27 17:25:22', 'MATH 1041', 5, 2, 'hard', 0),
(3, '2024-04-15 05:14:51', 'CIS 1051', 4, 2, 'Hard class', 5),
(6, '2024-04-16 00:39:12', 'CIS 3223', 3, 1, 'boring', 6),
(12, '2024-04-16 21:26:35', '4098', 5, 1, 'TOO HARD BAD', 7),
(1, '2024-04-15 04:15:09', 'CIS 1068', 3, 3, 'Cool course, projects, and content', 11),
(5, '2024-04-16 00:37:08', 'CIS 2166', 3, 3, 'A class is a class', 5),
(8, '2024-04-16 02:19:16', 'MATH 1041', 3, 3, 'so much', 3),
(9, '2024-04-16 02:26:15', 'MATH 1042', 3, 3, 'ez', 3);

INSERT INTO public."Comments" (id, created_at, comment, post)
VALUES
(1, '2024-04-16 00:57:04', 'I do not agree', 1),
(2, '2024-04-16 00:57:16', 'I do agree', 1),
(3, '2024-04-16 01:38:36', 'No you are totally wrong', 1),
(4, '2024-04-16 01:40:23', 'I hated it', 1),
(5, '2024-04-16 02:02:32', 'I agree so fun', 2),
(6, '2024-04-16 02:02:37', 'No it was not', 2),
(20, '2024-04-16 02:29:22', 'hi', 1),
(21, '2024-04-16 02:29:25', 'ok', 1),
(22, '2024-04-16 02:31:03', 'do comments work now', 1),
(23, '2024-04-16 02:31:08', 'ok they do', 1),
(24, '2024-04-16 02:31:42', 'yeha', 1),
(25, '2024-04-16 02:33:21', 'try again', 1),
(26, '2024-04-16 13:22:11', 'test', 3),
(27, '2024-04-16 15:31:47', 'i second this, the goat', 11),
(28, '2024-04-16 21:25:38', 'hello!', 2),
(29, '2024-04-17 22:56:10', '', 2),
(30, '2024-04-17 22:56:10', '', 2),
(31, '2024-04-27 03:57:33', 'hi', 13),
(32, '2024-04-27 03:57:36', 'bye', 13),
(33, '2024-04-27 17:18:47', 'asdf', 4),
(34, '2024-04-27 17:24:56', 'yea its good', 11);