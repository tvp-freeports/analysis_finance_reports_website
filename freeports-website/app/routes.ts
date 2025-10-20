import { 
    type RouteConfig, 
    index,
    route 
} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("tools","routes/tools.tsx"),
    route("projects","routes/projects.tsx"),
    route("contribute","routes/contribute.tsx"),
    route("community","routes/community.tsx"),
    route("contact-us","routes/contact-us.tsx")

] satisfies RouteConfig;
