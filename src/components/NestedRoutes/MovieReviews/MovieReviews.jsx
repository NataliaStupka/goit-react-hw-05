import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../../services/api";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]); //опис фільму

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieReviews(movieId);
      setReviews(data);
    };
    getData();
  }, [movieId]);
  console.log("reviews:", reviews);

  // if (!reviews) {
  //   return <h2>We don't have any reviews for this movie.</h2>;
  // }
  return (
    <div>
      <ul className={s.reviewList}>
        {reviews.map((review) => (
          <li key={review.id}>
            <div className={s.wrapper}>
              <p className={s.author}>
                Author: <span className={s.authorName}>{review.author}</span>
              </p>
              <p className={s.text}>{review.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;

// author
// :
// "Chris Sawin"
// author_details
// :
// {name: 'Chris Sawin', username: 'ChrisSawin', avatar_path: null, rating: 2}
// content
// :
// "The film adaptation of Wicked is based on the Broadway musical, which is a loose adaptation of the 1995 novel Wicked: The Life and Times of the Wicked Witch of the West by Gregory Maguire. Both Maguire’s novel and the musical are expansions of L. Frank Baum’s original The Wizard of Oz novel was published in 1900 and its film adaptation in 1939. The musical is one of the longest-running and financially successful Broadway musicals of all time.\r\n\r\nWith a screenplay by Winnie Holzman (writer of the book of the Wicked musical) and Dana Fox (Cruella) and directed by Jon M. Chu (Now You See Me 2, Crazy Rich Asians), Wicked begins around the time The Wizard of Oz ends. The Wicked Witch of the West has died and Glinda the Good Witch is breaking the news to Munchkinland. As the munchkins celebrate and burn a giant, Wicker Man-style witch in celebration of the witch’s death, Glinda is asked by one of the munchkins if she knew the witch.\r\n\r\nWhat follows is nearly three hours of how a green-skinned, outcast girl named Elphaba (Cynthia Erivo) whose emotions spark wondrous fits of unbelievable magic interacts with the spoiled, entitled, and pink-infatuated Galinda (Ariana Grande) as they enroll in a magic school known as Shiz University.\r\n\r\nVisually, Wicked is jaw-dropping and beautiful. All of the talking animals look extraordinary and every sequence with the flying monkeys is a visual highlight. Peter Dinklage voices a goat teacher named Dr. Dillamond and he has one of the most emotional arcs in the film. The bear nurse and dog doctor in the opening moments of the film look so good for what little amount of screen time they have.\r\n\r\nGiven how many VFX teams are credited in the film, it’s no wonder the CGI looks intricately gorgeous. The three VFX teams with the most credits in Wicked include OPSIS (The Fall Guy, Rescue Rangers), Framestore (Gladiator II, Beetlejuice Beetlejuice), and ILM (Venom: The Last Dance, Alien: Romulus). Then there’s various work from about a dozen different other VFX teams/houses, but the most intriguing one is one called FoyProAI.\r\n\r\nFoyProAI doesn’t have an accessible official website, but some digging around on an executive producer’s LinkedIn page gives some background. Foy stands for Fountains of Youth and FoyProAI specializes in de-aging, up-aging, and beauty work in film. They’ve worked on Smile 2, John Woo’s The Killer for Peacock, and 400 shots on Wicked.\r\n\r\nThere are moments of greatness in Wicked that mostly stem from the chemistry between Cynthia Erivo and Ariana Grande. Grande’s comedic roots, specifically her time and experience on SNL, really come into play here. Grande is essentially the comedic relief as Galinda as her outgoing personality carries most sequences while Erivo has more of a straightforward performance that has more of a dry delivery.\r\n\r\nBut the generic musical formula is infuriating. Story beats pause and go out of their way to cater to multiple songs at times and it logically hurts your brain. Yes, it’s a musical and yes people are going to sing. But when the main characters are trying to get away on a flying broom as guards are pounding at the door and they spend another ten minutes dancing, crying, and bellowing about their broken friendship it becomes a nuisance. Get on the damn broom and sing on the way to your destination. It doesn’t seem that hard.\r\n\r\nSome sequences are thrown in solely because they’ll make a big song more appealing (the whole rotating library straight out of Inception thing) or side stories that don’t go anywhere because two characters need to seem closer than they are (Elphaba and Fiyero’s awkward ten-minute excursion into the forest to free a lion cub). These are both roundabout executions that take the long way to showcase that Fiyero thinks reading is dumb and that he’s actually in love with Elphaba over Galinda.\r\n\r\nThe film adaptation seems like it’s quite faithful to its source material, but the Hollywood concept of transforming nasty and recognizable villains into sad, relatable characters that the audience roots for is a dumpster fire of a concept. Pure asshole villains can be fantastic too and often make protagonists more interesting if done right.\r\n\r\nBut the musical fantasy film treats Elphaba like dirt for the first hour and a half. Everyone looks down on her because of the color of her skin. Then when she finally becomes friends with Galinda, she develops a soft spot for mistreated animals. It’s the main reason she turns against The Wizard of Oz (Jeff Goldblum) apart from being one of the only characters who can read magic spells.\r\n\r\nWicked is Mean Girls at Hogwarts as everybody sucks and is superficial apart from a character that is supposed to be evil. Elphaba mostly accepts the role of wicked witch because her beliefs don’t match anyone else’s and she’s unwilling to adapt to their ways solely to keep the peace.\r\n\r\nWicked features some unreal VFX and even touches on some incredible ideas from time to time, but the ideas that work seem to stem from capitalizing on a fantasy world that was established over a century ago. As a film, Wicked conjures song after song and drags on and on solely because it’s a bloated musical that wants you to die a rhythmic, sometimes undecipherable, high-pitched death."
// created_at
// :
// "2024-11-22T19:35:57.756Z"
// id
// :
// "6740dd1d68823004ca9c639d"
// updated_at
// :
// "2024-11-22T19:35:57.797Z"
// url
// :
// "https://www.themoviedb.org/review/6740dd1d68823004ca9c639d"
